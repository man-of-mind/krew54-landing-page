import { Modal, TextInput } from "@mantine/core";
import React from "react";

const WaitlistModal = ({
  open,
  setOpened,
}: {
  open: boolean;
  setOpened: (val: boolean) => void;
}) => {
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
            fontWeight: 'bolder',
            color: '#1F6363'
        },
        close: {
            width: "40px",
            height: "40px",
            color: "#1F6363"
        }
      })}
    >
      <div>
        <form className="">
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
            styles={() => ({
              input: {
                height: "50px",
                borderRadius: "10px",
                marginBottom: "15px",
              },
              label: {
                fontWeight: "bolder",
                fontSize: "14px"
              }
            })}
          />
          <TextInput
            label="Name"
            placeholder="enter your name"
            id="name"
            withAsterisk
            required
            size="md"
            styles={() => ({
              input: {
                height: "50px",
                borderRadius: "10px",
                marginBottom: "15px",
              },
              label: {
                fontWeight: "bolder",
                fontSize: "14px"
              }
            })}
          />
          <div className="cursor-pointer font-bold px-4 py-3 mx-auto bg-green-100 w-fit rounded-lg mt-10 text-white-100">
            Join Waitlist
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default WaitlistModal;
