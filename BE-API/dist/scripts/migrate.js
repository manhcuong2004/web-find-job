"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const umzug_1 = require("umzug");
const connectDB_1 = require("../config/connectDB");
const umzug = new umzug_1.Umzug({
    migrations: {
        glob: 'src/migrations/*.ts',
    },
    context: connectDB_1.sequelize.getQueryInterface(),
    storage: new umzug_1.SequelizeStorage({ sequelize: connectDB_1.sequelize }),
    logger: console,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield connectDB_1.sequelize.authenticate();
    yield umzug.up(); // chạy migration
}))();
