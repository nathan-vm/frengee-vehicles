import { celebrate, Segments, Joi } from "celebrate";

const findVehiclesValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().hex().length(24).required(),
  },
});

export default findVehiclesValidator;
