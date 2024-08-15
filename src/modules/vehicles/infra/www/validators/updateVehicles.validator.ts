import { celebrate, Segments, Joi } from "celebrate";

const updateVehiclesValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().hex().length(24).required(),
  },
  [Segments.BODY]: {
    name: Joi.string(),
  },
});

export default updateVehiclesValidator;
