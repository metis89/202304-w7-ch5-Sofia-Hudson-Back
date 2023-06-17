import { Router as createRouter } from 'express';
import createDebug from 'debug';
import { Repository } from '../repository/repository.js';
import { User } from '../entities/user.js';
import { UserRepo } from '../repository/user.mongo.repository.js';
import { UserController } from '../controllers/user.constroller.js';
const debug = createDebug('W7:UserRouter ');

debug('Executed');
const repo: Repository<User> = new UserRepo() as Repository<User>;
const controller = new UserController(repo);
export const userRouter = createRouter();

userRouter.post('/register', controller.register.bind(controller));
userRouter.patch('/login', controller.login.bind(controller));
