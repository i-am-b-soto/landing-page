import { useState } from "react";
import { notification } from "antd";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from '../../firebase'


interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const [notification, setNotification] = useState("");

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));


    try {
      let success = false;
      if (Object.values(errors).every((error) => error === "")) {
       
        try {
            await addDoc(collection(db, "contacts"), {
              ...values,
              created: Timestamp.now(),
            });
            success = true;
          } catch (error) {
            console.error("Error sending message: ", error);
          }
        if (!success) {
          console.log("Error submiting to firebase")
          setNotification("There was an error sending your message, please try again later.")
        } else {
          event.target.reset();
          setFormState(() => ({
            values: { ...initialValues },
            errors: { ...initialValues },
          }));
         
          setNotification("Message Successfully Submitted!!!")
        }
      }
    } catch (error) {
      setNotification("There was an error sending your message, please try again later.")
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
    notification,
  };
};
