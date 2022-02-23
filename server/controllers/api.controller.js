import md5 from 'md5';
import HttpStatus from 'http-status-codes';
import Api from '../models/api.model';

/**
 * Find all the users
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Api.forge()
        .fetchAll()
        .then(api => res.json({
                error: false,
                data: api.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 *  Find user by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
    Api.forge({id: req.params.id})
        .fetch()
        .then(api => {
            if (!api) {
                res.status(HttpStatus.NOT_FOUND).json({
                    error: true, data: {}
                });
            }
            else {
                res.json({
                    error: false,
                    data: api.toJSON()
                });
            }
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Store new API
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req, res) {
    const {first_name, last_name, email} = req.body;
    const password = md5(req.body.password);
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    
    Api.forge({
        first_name, last_name, email, password, ip
    }).save()
        .then(api => res.json({
                success: true,
                data: api.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Update API by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req, res) {
    Api.forge({id: req.params.id})
        .fetch({require: true})
        .then(api => api.save({
                first_name: req.body.first_name || api.get('first_name'),
                last_name: req.body.last_name || api.get('last_name'),
                email: req.body.email || api.get('email')
            })
                .then(() => res.json({
                        error: false,
                        data: api.toJSON()
                    })
                )
                .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                        error: true,
                        data: {message: err.message}
                    })
                )
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Destroy API by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req, res) {
    Api.forge({id: req.params.id})
        .fetch({require: true})
        .then(api => api.destroy()
            .then(() => res.json({
                    error: false,
                    data: {message: 'API deleted successfully.'}
                })
            )
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    error: true,
                    data: {message: err.message}
                })
            )
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}