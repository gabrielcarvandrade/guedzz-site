import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Merch / Produtos",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome do produto",
      type: "string",
      placeholder: "Ex: Camiseta GuedZZ 2025",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL do produto)",
      description: "Gerado automaticamente a partir do nome. Clique em 'Generate'.",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "price",
      title: "Preço (R$)",
      description: "Digite apenas o número. Ex: 89.90",
      type: "number",
      validation: (r) => r.required().positive(),
    }),
    defineField({
      name: "images",
      title: "Fotos do produto",
      description: "Adicione uma ou mais fotos. A primeira será a imagem principal.",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "sizes",
      title: "Tamanhos disponíveis",
      description: "Marque os tamanhos disponíveis para este produto.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "PP", value: "PP" },
          { title: "P", value: "P" },
          { title: "M", value: "M" },
          { title: "G", value: "G" },
          { title: "GG", value: "GG" },
          { title: "XGG", value: "XGG" },
          { title: "Único (sem tamanho)", value: "Único" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Descrição",
      description: "Descreva o produto: material, corte, detalhes.",
      type: "text",
      rows: 3,
      placeholder: "Ex: Camiseta 100% algodão com estampa exclusiva. Corte unissex.",
    }),
    defineField({
      name: "featured",
      title: "Destaque na home?",
      description: "Ative para exibir esse produto na página inicial.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "category",
      title: "Categoria",
      description: "Selecione a categoria para filtrar na loja.",
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
