import { Router } from "express";
import {
  deleteEmployee,
  getEmployee,
  getEmployees,
  insertEmployee,
  updateEmployee,
} from "../controllers/employeeController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import {
  employeeInsertSchema,
  employeeUpdateSchema,
} from "../schemas/employeeSchemas.js";

const employeeRouter = Router();
employeeRouter.get("/employees", getEmployees);
employeeRouter.get("/employees/:id", getEmployee);
employeeRouter.post(
  "/employees",
  validateSchemaMiddleware(employeeInsertSchema),
  insertEmployee
);
employeeRouter.put(
  "/employees/:id",
  validateSchemaMiddleware(employeeUpdateSchema),
  updateEmployee
);
employeeRouter.delete("/employees/:id", deleteEmployee);
export default employeeRouter;