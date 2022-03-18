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
function EditorCanvas({ postcard }: EditorCanvasProps) {

    const canvasRef = useRef(null);

    useEffect(function () {
        const canvas = canvasRef.current;


    })
    return (
        <img className="round" src={postcard.url} alt="Postcard Editor" />
    )
}

export default EditorCanvas;