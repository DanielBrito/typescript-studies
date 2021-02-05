import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Daniel Brito", email: "daniel@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Daniel Brito",
        email: "daniel@gmail.com",
      },
      message: {
        subject: "Welcome",
        body: "You have completed the subscription!",
      },
    });

    return res.send();
  },
};
