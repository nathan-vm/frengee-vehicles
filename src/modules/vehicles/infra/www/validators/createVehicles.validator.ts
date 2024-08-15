import { celebrate, Segments, Joi } from "celebrate";

const createVehiclesValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    brand: Joi.string().required(),
    year: Joi.number().positive().required(),
  },
});

export default createVehiclesValidator;
