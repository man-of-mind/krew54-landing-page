import { Alert, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import axios from "axios";

const WaitlistModal = ({
  open,
  setOpened,
}: {
  open: boolean;
  setOpened: (val: boolean) => void;
}) => {
  const [error, showError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false)
  const [successMsg, setSuccessMsg] = React.useState("")

  const waitlistForm = useForm({
    initialValues: {
      email: "",
      name: "",
    },

    validate: {
      email: (value) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
          ? null
          : "Invalid email",
    },
  });

  const handleSubmit = ({ email, name }: { email: string; name: string }) => {
    setIsSubmitting(true);
    showError(false)
    setSuccess(false)
    axios
      .post(
        "https://krew54.ew.r.appspot.com/waitlist",
      { "email": email, "fullName": name }
      )
      .then((response) => {
        console.log(response);
        setIsSubmitting(false);
        setSuccess(true)
        setSuccessMsg(response.data.msg)
      })
      .catch((err) => {
        try {
          if (err?.response.status === 400) {
            setErrorMsg(err.response.data.errors.msg);
          } else if (err?.response.status === 422) {
            setErrorMsg(err.response.data.error);
          } else {
            setErrorMsg("Hmmm, something went wrong, try again later.");
          }
        } catch (error) {
          setErrorMsg("Hmmm, something went wrong, try again later.");
        } finally {
          showError(true);
          setIsSubmitting(false);
        }
      });
  };

  return (
    <Modal
      centered
      opened={open}
      title="Join Waitlist"
      onClose={() => setOpened(false)}
      withCloseButton
      styles={() => ({
        title: {
          fontSize: 30,
          fontWeight: "bolder",
          color: "#1F6363",
        },
        close: {
          width: "40px",
          height: "40px",
          color: "#1F6363",
        },
      })}
    >
      <div>
        <form
          onSubmit={waitlistForm.onSubmit((values) => handleSubmit(values))}
          className="flex flex-col"
        >
          <p className="text-center text-sm opacity-70 pb-3">
            Leveraging technology & social engagement to promote African`s
            financial inclusion.
          </p>
          <TextInput
            label="Email"
            placeholder="enter your email"
            id="email"
            type="email"
            withAsterisk
            required
            size="md"
            onFocusCapture={() => {
              showError(false)
              setSuccess(false)
            }}
            {...waitlistForm.getInputProps("email")}
            styles={() => ({
              input: {
                height: "50px",
                borderRadius: "10px",
                marginBottom: "15px",
              },
              label: {
                fontWeight: "bolder",
                fontSize: "14px",
              },
            })}
          />
          <TextInput
            label="Full Name"
            placeholder="enter your name"
            id="name"
            withAsterisk
            required
            size="md"
            onFocusCapture={() => {
              showError(false)
              setSuccess(false)
            }}
            {...waitlistForm.getInputProps("name")}
            styles={() => ({
              input: {
                height: "50px",
                borderRadius: "10px",
                marginBottom: "15px",
              },
              label: {
                fontWeight: "bolder",
                fontSize: "14px",
              },
            })}
          />
          {success && (
            <Alert id="alert1" title="Sucess!" color="green">
              {successMsg}
            </Alert>
          )}
          {error && (
            <Alert id="alert" title="Error!" color="red">
              {errorMsg}
            </Alert>
          )}
          <button
            type="submit"
            className="cursor-pointer self-center font-bold px-4 py-3 bg-green-100 w-fit rounded-lg mt-10 text-white-100"
          >
            {!isSubmitting ? "Join Waitlist" : "Loading..."}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default WaitlistModal;
