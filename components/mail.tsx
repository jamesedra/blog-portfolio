"use client";

import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { withRouter } from "next/router";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { values: initValues, error: "", isLoading: false };

export const Mail = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const sendContactForm = async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!response.ok) throw new Error("Failed to send message");
    setEmailSubmitted(true);
  };

  const { values, isLoading, error } = state;

  const onBlur = ({
    target,
  }: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    debugger;
    // console.log(values); check is values were passed
    try {
      await sendContactForm(values);
      setState((prev) => ({
        ...prev,
        error: "",
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: (error as Error).message,
      }));
    }
  };

  return (
    <Container
      className="items-center rounded-2xl border border-zinc-700/40 p-6 max-w-[90%] sm:max-w-md mt-4 w-full h-full"
      id="contact"
    >
      <div>
        <h5 className="flex font-semibold text-zinc-100">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="0"
            height="1em"
            width="1em"
            className="h-6 w-6 flex-none"
          >
            <path
              d="M21 12.13c-.15.01-.29.06-.39.17l-1 1 2.05 2 1-1c.22-.21.22-.56 0-.77l-1.24-1.23a.557.557 0 00-.38-.17m-2 1.75L13 19.94V22h2.06l6.06-6.07M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h7v-.89l8.24-8.22c.47-.49 1.12-.76 1.8-.76.34 0 .68.06 1 .19V6c0-1.12-.92-2-2.04-2m0 4l-8 5-8-5V6l8 5 8-5"
              className="fill-zinc-500"
            />
          </svg>
          <span className="ml-3">Shoot me an email</span>
        </h5>
        <p className="mt-1 ml-1 text-sm text-zinc-300 font-light">
          I&apos;m always free for tea~
        </p>
        {error && (
          <span className="ml-1 text-sm font-light text-red-600">{error}</span>
        )}
      </div>
      <div className="text-zinc-400 text-sm font-light">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2 ml-1">
            Email sent successfully!
          </p>
        ) : (
          <form>
            <FormControl
              className="flex flex-col text-sm font-light pt-5 mx-2 mb-3"
              isRequired
              isInvalid={touched.name && !values.name}
            >
              <FormLabel className="mb-2">Name</FormLabel>
              <Input
                type="text"
                name="name"
                errorBorderColor="red.300"
                value={values.name}
                placeholder="Tea Person"
                onChange={handleChange}
                onBlur={onBlur}
                className="rounded-lg border border-zinc-700 bg-zinc-800/30 p-2.5 mb-2"
              />
              <FormErrorMessage className="text-red-600 text-xs">
                Required
              </FormErrorMessage>
            </FormControl>

            <FormControl
              className="flex flex-col text-sm font-light mx-2 mb-3"
              isRequired
              isInvalid={touched.email && !values.email}
            >
              <FormLabel className="mb-2">Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={values.email}
                errorBorderColor="red.300"
                placeholder="letsgetsometea@example.com"
                onChange={handleChange}
                onBlur={onBlur}
                className="rounded-lg border border-zinc-700 bg-zinc-800/30 p-2.5 mb-2"
              />{" "}
              <FormErrorMessage className="text-red-600 text-xs">
                Required
              </FormErrorMessage>
            </FormControl>

            <FormControl
              className="flex flex-col text-sm font-light mx-2 mb-3"
              isRequired
              isInvalid={touched.subject && !values.subject}
            >
              <FormLabel className="mb-2">Subject</FormLabel>
              <Input
                type="text"
                name="subject"
                value={values.subject}
                placeholder="Tea appointment at 18:00"
                errorBorderColor="red.300"
                onChange={handleChange}
                onBlur={onBlur}
                className="rounded-lg border border-zinc-700 bg-zinc-800/30 p-2.5 mb-2"
              />{" "}
              <FormErrorMessage className="text-red-600 text-xs">
                Required
              </FormErrorMessage>
            </FormControl>

            <FormControl
              className="flex flex-col text-sm font-light mx-2 mb-5"
              isRequired
              isInvalid={touched.message && !values.message}
            >
              <FormLabel className="mb-2">Message</FormLabel>
              <Textarea
                name="message"
                rows={4}
                value={values.message}
                placeholder="Let's grab some tea!"
                errorBorderColor="red.300"
                onChange={handleChange}
                onBlur={onBlur}
                className="rounded-tl-lg rounded-tr-lg rounded-bl-lg border border-zinc-700 bg-zinc-800/30 p-2.5 mb-2"
              />
              <FormErrorMessage className="text-red-600 text-xs">
                Required
              </FormErrorMessage>
            </FormControl>
            <div className="flex items-center justify-center">
              <Button
                variant="outline"
                disabled={
                  !values.name ||
                  !values.email ||
                  !values.subject ||
                  !values.message
                }
                isLoading={isLoading}
                onClick={onSubmit}
                className="text-sm font-thin rounded-full py-2.5 px-5 text-zinc-100 bg-neutral-800 hover:bg-neutral-700 hover:text-white transition-colors"
              >
                send message
              </Button>
            </div>
          </form>
        )}
      </div>
    </Container>
  );
};

export default withRouter(Mail);
