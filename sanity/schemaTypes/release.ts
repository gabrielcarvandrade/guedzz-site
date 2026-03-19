import { defineField, defineType } from "sanity";

export const release = defineType({
  name: "release",
  title: "Músicas / Releases",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "type",
      title: "Tipo",
      type: "string",
      options: { list: ["album", "ep", "single"], layout: "radio" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "year", title: "Ano", type: "number", validation: (r) => r.required() }),
    defineField({ name: "coverImage", title: "Capa", type: "image", options: { hotspot: true } }),
    defineField({ name: "spotifyUrl", title: "Link Spotify", type: "url" }),
    defineField({ name: "soundcloudUrl", title: "Link SoundCloud", type: "url" }),
    defineField({ name: "description", title: "Descrição", type: "text", rows: 3 }),
    defineField({ name: "bpm", title: "BPM", type: "number" }),
    defineField({ name: "genre", title: "Gênero", type: "string" }),
  ],
  preview: {
    select: { title: "title", subtitle: "type", media: "coverImage" },
  },
});
