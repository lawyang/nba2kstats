const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema(
    {
        player: {type: String, require: true},
        archetype: {type: String},
        twopointers: {type: Number, default: 0},
        threepointers: {type: Number, default: 0},
        rebounds: {type: Number}, default: 0,
        assists: {type: Number, default: 0},
        steals: {type: Number, default: 0},
        blocks: {type: Number, default: 0}
    }
)

module.exports = mongoose.model('nbastats', PlayerSchema);