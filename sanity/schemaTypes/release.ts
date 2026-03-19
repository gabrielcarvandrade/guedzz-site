import { defineField, defineType } from "sanity";

export const release = defineType({
  name: "release",
  title: "Músicas / Releases",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      placeholder: "Ex: Summer Feelings",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "type",
      title: "Tipo de lançamento",
      description: "Single = música avulsa. EP = mini-álbum (3–6 faixas). Álbum = projeto completo.",
      type: "string",
      options: { list: ["album", "ep", "single"], layout: "radio" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "year",
      title: "Ano de lançamento",
      description: "Ex: 2025",
      type: "number",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "genre",
      title: "Gênero",
      description: "Ex: Tech House, Afro House, Minimal",
      type: "string",
      placeholder: "Ex: Tech House",
    }),
    defineField({
      name: "bpm",
      title: "BPM",
      description: "Batidas por minuto. Ex: 126",
      type: "number",
    }),
    defineField({
      name: "coverImage",
      title: "Capa",
      description: "Imagem quadrada (1:1). Mínimo 500x500px.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "spotifyUrl",
      title: "Link Spotify",
      description: "URL completa. Ex: https://open.spotify.com/track/...",
      type: "url",
    }),
    defineField({
      name: "soundcloudUrl",
      title: "Link SoundCloud",
      description: "URL completa. Ex: https://soundcloud.com/guedz-228285479/summer-feelings",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Descrição",
      description: "Contexto da faixa, inspirações, notas de produção.",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "type", media: "coverImage" },
  },
});
