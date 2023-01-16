import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { GrAttachment } from "react-icons/gr";
const DropZone = ({ setFiles, files }) => {
  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
      "image/svg": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    maxFiles: 2,
  });

  const thumbs = files?.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);
  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <GrAttachment />
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
    // <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
    //   {({ getRootProps, getInputProps }) => (
    //     <section>
    //       <div {...getRootProps()}>
    //         <input {...getInputProps()} />
    //         <GrAttachment />
    //       </div>
    //     </section>
    //   )}
    // </Dropzone>
  );
};
export default DropZone;
