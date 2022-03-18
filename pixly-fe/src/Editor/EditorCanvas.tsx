import { useRef, useEffect } from "react";
import { EditorCanvasProps } from "../Interfaces";
import "./EditorCanvas.css";

/**
 * 
 * props: postcard object {url, key}
 * 
 * state: none (yet)
 * 
 * hierarchy: Editor Handler -> EditorCanvas
 * 
 */
function EditorCanvas({ postcard, filter }: EditorCanvasProps) {

    const canvasRef = useRef(null);

    useEffect(function () {
        const canvas = canvasRef.current;
    })

    return (
        <div className="EditorCanvas">
            <img className={`${filter}`} src={postcard.url} alt="Postcard Editor" />
        </div>
    )
}

export default EditorCanvas;