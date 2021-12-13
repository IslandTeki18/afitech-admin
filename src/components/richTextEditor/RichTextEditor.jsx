import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const RichTextEditor = (props) => {
    return (
        <CKEditor
            editor={ClassicEditor}
            data={props.data}
            onChange={(event, editor) => {
                const data = editor.getData();
                props.onChange(data);
            }}
        />
    );
};

export default RichTextEditor;
