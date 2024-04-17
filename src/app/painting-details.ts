export class PaintingDetails {
  public id: number = 0;
  public name: string = '';
  public artist: string = '';
  public dimensions: {
    width: number;
    height: number;
  } = { width: 0, height: 0 };
  public medium: string = '';
  public picture: string = '';
  public famous: boolean = false;
}
