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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, '../Controllers/list.json');
exports.listtest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    fs_1.default.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).json({
                message: 'Error reading JSON file',
            });
            return;
        }
        try {
            // แปลงข้อมูล JSON เป็น Object
            const jsonData = JSON.parse(data);
            // ส่งข้อมูลใน response
            res.status(200).json({
                message: 'listproducts',
                data: jsonData,
            });
        }
        catch (jsonError) {
            console.error('Error parsing JSON:', jsonError);
            res.status(500).json({
                message: 'Error parsing JSON',
            });
        }
    });
});
exports.createtest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    console.log('req.body.name =', { name });
    res.status(200).json({
        message: 'create testapi',
        data: req.body.name,
    });
});
exports.edittest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    console.log('req.body.id =', { id });
    res.status(200).json({
        message: 'update testapi',
        data: id,
    });
});
exports.deletetest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    console.log('req.body.id =', { id });
    res.status(200).json({
        message: 'softdelete testapi',
        data: id,
    });
});
exports.harddeletetest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    console.log('req.body.id =', { id });
    res.status(200).json({
        message: 'harddelete testapi',
        data: id,
    });
});
