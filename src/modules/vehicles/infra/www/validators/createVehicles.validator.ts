import { celebrate, Segments, Joi } from "celebrate";

const createVehiclesValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
  },
});

export default createVehiclesValidator;
