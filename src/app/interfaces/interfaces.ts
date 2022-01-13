export interface GalleryItems{
  folder: string,
  items: [
    {
      id: string,
      src: string,
      alt: string,
      name?: string
    }
  ]
}

export interface ElementList{
  leftHidden: any,
  left: any,
  leftCenter: any,
  center: any,
  rightCenter: any,
  right: any,
  rightHidden: any,
}
