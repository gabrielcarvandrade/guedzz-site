import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Merch / Produtos",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "price", title: "Preço (BRL)", type: "number", validation: (r) => r.required().positive() }),
    defineField({
      name: "images",
      title: "Fotos do produto",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "sizes",
      title: "Tamanhos disponíveis",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "description", title: "Descrição", type: "text", rows: 3 }),
    defineField({ name: "featured", title: "Destaque na home?", type: "boolean", initialValue: false }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: { list: ["camiseta", "acessorio", "vinil", "hoodie"], layout: "radio" },
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "price", media: "images.0" },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: subtitle ? `R$ ${subtitle}` : "", media };
    },
  },
});
