import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Eventos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nome do evento",
      type: "string",
      placeholder: "Ex: Festival Conexão House",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Data e hora",
      description: "Selecione a data e o horário de início do show.",
      type: "datetime",
      options: { dateFormat: "DD/MM/YYYY", timeFormat: "HH:mm", timeStep: 15 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "venue",
      title: "Local / Casa",
      description: "Nome da balada, festival ou espaço. Ex: Club Noize",
      type: "string",
      placeholder: "Ex: Club Noize",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "city",
      title: "Cidade, Estado",
      description: "Ex: Belo Horizonte, MG",
      type: "string",
      placeholder: "Ex: Belo Horizonte, MG",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "ticketUrl",
      title: "Link de ingresso",
      description: "URL do Sympla, Ingresse ou site do evento. Deixe vazio se não tiver venda online.",
      type: "url",
      placeholder: "https://sympla.com.br/...",
    }),
    defineField({
      name: "past",
      title: "Evento já aconteceu?",
      description: "Ative após o show acontecer para mover para 'eventos passados'.",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "city" },
  },
});
