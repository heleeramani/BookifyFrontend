import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./StartPost.module.scss";
import axios from "axios";

const validationSchema = Yup.object({
  title: Yup.string()
    .required("Subject Name must be required")
    .min(3, "Title must be at least 3 characters"),
  description: Yup.string()
    .required("Post content is required")
    .min(10, "post content must be at least 10 characters"),
  embedLink: Yup.string().optional(),
  mediaUrl: Yup.string().optional(),
});

const StartPost = () => {
  const [showEmbed, setShowEmbed] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{
    type: string,
    url: string
  } | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const handleSubmit = async (
    values: any,
    { resetForm, setSubmitting }: any
  ) => {
    let tkn = localStorage.getItem("auth-token");
    let payload = {
      mediaUrl:
        values.mediaUrl ||
        `${process.env.NEXT_PUBLIC_REACT_APP_IMAGE_URL}/post/image`,
      title: values.title,
      description: values.description,
      link: values.embedLink || "",
      status: "PUBLISHED",
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/post/create`,
        payload,
        {
          headers: {
            Authorization: `${tkn}`,
          },
        }
      );
      console.log("login", res.data);
      setUploadedFile(null);
      setShowEmbed(false);
      resetForm();
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    const tkn = localStorage.getItem("auth-token");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        ${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/post/image,
        formData,
        {
          headers: {
            Authorization: `${tkn}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image Upload Response:", response.data);
      return response.data.data.url;
    } catch (error) {
      throw new Error("Failed to upload image");
    }
  };

  const handleCodeClick = () => {
    setShowEmbed(true);
  };

  const handleCloseEmbed = () => {
    setShowEmbed(false);
  };

  return (
    <div className={style.mainDiv}>
      <div className={style.container}>
        <Formik
          initialValues={{
            title: "",
            description: "",
            embedLink: "",
            mediaUrl: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <>
              <Form>
                <div className={style.uploadSection}>
                  <div className={style.uploadContent}>
                    {uploadedFile ? (
                      uploadedFile.type === "image" ? (
                        <img
                          src={uploadedFile.url}
                          alt="Uploaded"
                          className={style.uploadPreview}
                        />
                      ) : (
                        <video
                          src={uploadedFile.url}
                          controls
                          className={style.uploadPreview}
                        />
                      )
                    ) : (
                      <>
                        <img
                          src="/icons/gallaryicon.svg"
                          alt="Upload icon"
                          className={style.upload}
                        />
                        <p>
                          We Recommend Uploading or Dragging In a Video or Image
                        </p>
                      </>
                    )}
                    <label className={style.uploadButton}>
                      <input
                        type="file"
                        className={style.fileinput}
                        accept="image/,video/"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            try {
                              const imageUrl = await handleImageUpload(file);
                              setFieldValue("mediaUrl", imageUrl);
                              const fileURL = URL.createObjectURL(file);
                              setUploadedFile({
                                type: file.type.startsWith("image/")
                                  ? "image"
                                  : "video",
                                url: fileURL,
                              });
                              setImageError(null);
                            } catch (error) {
                              setImageError("Failed to upload image");
                              setFieldValue("mediaUrl", "");
                              e.target.value = "";
                            }
                          }
                        }}
                      />
                      <img
                        src="/icons/document-upload.svg"
                        alt="Upload"
                        className={style.upload2}
                      />
                      Upload from Computer
                    </label>
                    {imageError && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "16px",
                          marginTop: "10px",
                        }}
                      >
                        {imageError}
                      </div>
                    )}
                  </div>
                </div>

                <div className={style.editorSection}>
                  <div className={style.formatting}>
                    <span className={style.style}>Style</span>
                    <span className={style.chevron}>
                      <img
                        src="/icons/arrow-down-single.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                    </span>
                    <button type="button">
                      <img src="/icons/bold.svg" alt="Bold" />
                    </button>
                    <button type="button">
                      <img src="/icons/italic.svg" alt="Italic" />
                    </button>
                    <button type="button">
                      <img src="/icons/link.svg" alt="Link" />
                    </button>
                    <button type="button" onClick={handleCodeClick}>
                      <img src="/icons/code-circle.svg" alt="Code" />
                      <Field
                        type="text"
                        name="embedLink"
                        style={{ display: "none" }}
                      />
                      <ErrorMessage
                        name="embedLink"
                        component="div"
                        className={style.errorMessage}
                      />
                    </button>
                    <button type="button">
                      <img src="/icons/imgsmall.svg" alt="Image" />
                    </button>
                  </div>
                </div>

                <div className={style.inputMain}>
                  <p className={style.subjectInput}>
                    <Field
                      type="text"
                      name="title"
                      placeholder="Subject name"
                      className={style.contentInputSubject}
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className={style.errorMessage}
                    />
                  </p>

                  <p className={style.subjectInput}>
                    <Field
                      as="textarea"
                      name="description"
                      placeholder="Write here"
                      className={style.contentInput}
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className={style.errorMessage}
                    />
                  </p>

                  <div className={style.footer}>
                    <button
                      type="submit"
                      className={style.postButton}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Posting..." : "Post"}
                    </button>
                  </div>
                </div>
              </Form>

              {showEmbed && (
                <div className={style.modalOverlay}>
                  {/* <div className={style.relativeDiv}> */}

                  <div className={style.modalContent}>
                    <div
                      className={style.closeButtonDiv}
                      onClick={handleCloseEmbed}
                    >
                      <img src="/icons/close.svg" alt="Close" />
                    </div>
                    <div className={style.modalHeader}>
                      <p>Add Embed</p>
                    </div>
                    <div className={style.modalBody}>
                      <label>Embed Link</label>
                      <Field
                        type="text"
                        name="embedLink"
                        placeholder="Paste embed link here"
                        className={style.embedInput}
                      />
                      <ErrorMessage
                        name="embedLink"
                        component="div"
                        className={style.errorMessage}
                      />
                    </div>
                  </div>
                </div>
                // </div>
              )}
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default StartPost;