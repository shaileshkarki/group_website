import React, { useEffect, useState } from 'react'

import { Formik } from "formik";
import * as Yup from "yup";

import TextInput from './TextInput'
import FormButton from './FormButton';
import TextArea from './TextArea';
import "../styles/ContactUs.css"

import emailjs, { init } from 'emailjs-com';
import { BallBeat } from 'react-pure-loaders';

const contactSchema = Yup.object().shape({
    contactName: Yup.string().required().label("Contact Name"),
    contactEmail: Yup.string().email().required().label("Contact Email"),
    contactPhone: Yup.string().required().label("Contact Phone"),
    contactMessage: Yup.string().required().label("Message")
});






export default function ContactUs() {
    const [sendingEmail, setSendingEmail] = useState(false);
    const [emailSent, setEmailSent] = useState(null);

    const sendEmail = (templateId, variables) => {
        try {
            emailjs.send(
                "service_1mn3ymq", templateId,
                variables
            ).then(res => {
                console.log('Email successfully sent!')
                // setLoading(false)
                setSendingEmail(false)
                setEmailSent(true)
            }).catch(err => {
                console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
                // setLoading(false)
                setSendingEmail(false)
                setEmailSent(false)
            })
        } catch (error) {
            console.log("error = " + error)
            // setLoading(false)
            setSendingEmail(false);
            setEmailSent(false)
        }

        // Handle errors here however you like, or use a React error boundary

    }

    useEffect(() => {
        init("user_j1ADGdHX72eDEfCx1jLGC");
    }, [])
    return (
        <div className="contact-us-wrapper">
            {emailSent ? <div>email sent sucessfully!
                                     <FormButton
                    title="Ok"
                    type="button"
                    // width={inputWidth}
                    height={50}
                    onSubmit={() => { setEmailSent(null) }} /> </div> : emailSent === false ? <div>something went wrong! <FormButton
                        title="Try Again"
                        type="button"
                        // width={inputWidth}
                        height={50}
                        onSubmit={() => { setEmailSent(null) }} /></div> :
                    sendingEmail ? <div>
                        sending email
                        <BallBeat
                            color={"red"}
                            loading={sendingEmail}
                        /> </div> :
                        <div className="contact-us">
                            {/* <h1>Have us create a website or an application for you.</h1> */}
                            <Formik
                                initialValues={{ contactName: "", contactEmail: "", contactPhone: "", contactMessage: "" }}
                                onSubmit={async (fields, { setFieldError }) => {
                                    setSendingEmail(true)
                                    sendEmail("template_0lxlfmd", { message: fields.contactMessage, from_name: fields.contactName, reply_to: fields.contactEmail, contact_phone: fields.contactPhone })
                                }

                                }
                                validationSchema={contactSchema}
                            >
                                {({ handleChange, handleSubmit, errors }) => (
                                    <>
                                        <TextInput
                                            // width={inputWidth}
                                            height={50}
                                            labelFontSize={10}
                                            label="Contact Name"
                                            // labelTextColor="green"
                                            // inputTextColor="red"
                                            // inputFontSize={15}
                                            placeholder="Enter Contact Name"
                                            // capitalize={true}
                                            iconName={"user"}
                                            name="conteact-name"
                                            onChange={handleChange("contactName")}
                                            error={errors ? errors.contactName : ""}

                                        // screenWidth={containerWidth}
                                        />

                                        <TextInput
                                            // width={inputWidth}
                                            height={50}
                                            labelFontSize={10}
                                            label="Email"
                                            // labelTextColor="green"
                                            // inputTextColor="red"
                                            // inputFontSize={15}
                                            placeholder="Enter Contact Email"
                                            // capitalize={true}
                                            iconName={"envelope"}
                                            name="contact-email"
                                            onChange={handleChange("contactEmail")}
                                            error={errors ? errors.contactEmail : ""}
                                        // screenWidth={containerWidth}
                                        />

                                        <TextInput
                                            // width={inputWidth}
                                            height={50}
                                            labelFontSize={10}
                                            label="Phone"
                                            // labelTextColor="green"
                                            // inputTextColor="red"
                                            // inputFontSize={15}
                                            placeholder="Enter Contact Phone"
                                            // capitalize={true}
                                            iconName={"phone"}
                                            name="contact-phone"
                                            onChange={handleChange("contactPhone")}
                                            error={errors ? errors.contactPhone : ""}
                                        // screenWidth={containerWidth}
                                        />
                                        <TextArea
                                            // width={inputWidth - 1}   
                                            height={200}
                                            placeholder="Please leave a message here and we will get to your enquiry as soon as possible."
                                            error={errors ? errors.contactMessage : ""}
                                            onChange={handleChange("contactMessage")}
                                            // color="re
                                            fontSize={18}
                                            name="contact-message"

                                        />
                                        <FormButton
                                            title="submit"
                                            type="submit"
                                            // width={inputWidth}
                                            height={50}
                                            onSubmit={handleSubmit} />



                                    </>)}
                            </Formik>
                        </div>}
        </div>
    )
}
