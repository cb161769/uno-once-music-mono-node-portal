export class CreateProductsResponseDto {
  id: string;
  name: string;
  create_time: string;
  links: Link[];
}
export class Link {
  href: string;
  rel: string;
  method: string;
}