const Department = require("../models/Department");

exports.getDepartments = async (req, res) => {

    try {

        const departments = await Department.find();

        res.json(departments);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

exports.createDepartment = async (req, res) => {

    try {

        const department = await Department.create(req.body);

        res.status(201).json(department);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};