// TODO: Should this be lower-case "i"?

interface ImageInfoInterface {
  key: any,
  url: string,
}

interface RoutesProps {
  postcards: ImageInfoInterface[],
}

interface PostcardHandlerProps {
  postcards: ImageInfoInterface[],
}

interface PostcardGridProps {
  postcards: ImageInfoInterface[],
}

interface PostcardProps {
  postcard: ImageInfoInterface,
}

interface EditorCanvasProps {
  postcard: ImageInfoInterface,
}

export type {
  ImageInfoInterface,
  RoutesProps,
  PostcardHandlerProps,
  PostcardGridProps,
  PostcardProps,
  EditorCanvasProps,
};