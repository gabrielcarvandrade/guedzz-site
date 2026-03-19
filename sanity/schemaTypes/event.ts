import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Eventos",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Nome do evento", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Data e hora", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "venue", title: "Local / Casa", type: "string", validation: (r) => r.required() }),
    defineField({ name: "city", title: "Cidade, Estado", type: "string", validation: (r) => r.required() }),
    defineField({ name: "ticketUrl", title: "Link de ingresso", type: "url" }),
    defineField({ name: "past", title: "Evento passado?", type: "boolean", initialValue: false }),
  ],
  preview: {
    select: { title: "title", subtitle: "city" },
  },
});
