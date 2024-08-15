import { celebrate, Segments, Joi } from "celebrate";

const deleteVehiclesValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().hex().length(24).required(),
  },
});

export default deleteVehiclesValidator;
