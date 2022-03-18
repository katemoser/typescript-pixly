// TODO: Should this be lower-case "i"?

/**Interface for Image info, to use anywhere needed */
interface ImageInfoInterface {
  /**key (name) of image in AWS s3 */
  key: any,
  /**url where image is served by AWS S3 */
  url: string,
}

/**Interface for RoutingProps */
interface RoutesProps {
  /**array of image info like [{url, key},{}...] */
  postcards: ImageInfoInterface[],
}

/**Interface for PostcardHandler */
interface PostcardHandlerProps {
  /**array of image info like [{url, key},{}...] */
  postcards: ImageInfoInterface[],
}

/**Interface for PostcardGrid */
interface PostcardGridProps {
  /**array of image info like [{url, key},{}...] */
  postcards: ImageInfoInterface[],
}

/**interface for PostcardProps */
interface PostcardProps {
  /**image info like {url, key} */
  postcard: ImageInfoInterface,
}

/**Interface for EditorCanvas */
interface EditorCanvasProps {
  /**image info like {url, key} */
  postcard: ImageInfoInterface,
}

interface EditorInputFormProps {
  updateFilter : (filter: string)=>void,
}

export type {
  ImageInfoInterface,
  RoutesProps,
  PostcardHandlerProps,
  PostcardGridProps,
  PostcardProps,
  EditorCanvasProps,
  EditorInputFormProps,
};