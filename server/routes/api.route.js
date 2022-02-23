import express from 'express';
import * as apiCtrl from '../controllers/api.controller';
import isAuthenticated from '../middlewares/authenticate';
import validate from '../config/joi.validate';
import schema from '../utils/api.validator';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: API
 *     description: API operations
 */

router.route('/')

/**
 * @swagger
 * /api:
 *   post:
 *     tags:
 *       - api
 *     summary: "Create a new API"
 *     security:
 *        - Bearer: []
 *     operationId: storeUser
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Created api object
 *         required: true
 *         schema:
 *           $ref: "#/definitions/api"
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/api"
 *       403:
 *          description: API not found
 *          schema:
 *             $ref: '#/definitions/Error'
 */

    .post(validate(schema.storeApi), (req, res) => {
        apiCtrl.store(req, res);
    })

    /**
     * @swagger
     * /users:
     *   get:
     *     tags:
     *       - api
     *     summary: "List all users"
     *     operationId: findAll
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     parameters: []
     *     responses:
     *       200:
     *         description: OK
     *         schema:
     *            type: object
     */

    .get( (req, res) => {
        apiCtrl.findAll(req, res);
    });


router.route('/:id')

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - api
 *     summary: Find the api by ID
 *     operationId: findById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id of api that needs to be fetched
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/api"
 *       404:
 *          description: api not found
 *          schema:
 *             $ref: '#/definitions/Error'
 */

    .get( (req, res) => {
        apiCtrl.findById(req, res);
    })

    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     tags:
     *       - api
     *     summary: "Update an existing api by ID"
     *     security:
     *       - Bearer: []
     *     operationId: update
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: id that need to be updated
     *         required: true
     *         type: integer
     *       - name: body
     *         in: body
     *         description: Updated api object
     *         required: true
     *         schema:
     *           $ref: "#/definitions/api"
     *     responses:
     *       200:
     *         description: OK
     *         schema:
     *           $ref: "#/definitions/api"
     *       400:
     *         description: Invalid api
     */

    .put(isAuthenticated, (req, res) => {
        apiCtrl.update(req, res);
    })

    /**
     * @swagger
     * /api/{id}:
     *   delete:
     *     tags:
     *       - api
     *     summary: Delete the api by ID
     *     security:
     *       - Bearer: []
     *     operationId: destroy
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: id of api that needs to be deleted
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: OK
     *       400:
     *          description: "Invalid ID"
     */

    .delete(isAuthenticated, (req, res) => {
        apiCtrl.destroy(req, res);
    });


export default router;