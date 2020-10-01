import Lane from '../models/Lane';

export async function get(req, res) {
    try {
        let laneId = req.params.laneId;
        if (laneId) {
            const lane = await Lane.findById(laneId);
            res.status(200).json(lane);
        }
        else {
            const lanes = await Lane.find();
            res.json(lanes);
        }
    } catch (error) {
        res.json({ message: error });
    }
}

export async function create(req, res) {
    const lane = new Lane({
        title: req.body.title
    });
    try {
        const savedLane = await lane.save();
        res.json(savedLane);
    } catch (error) {
        res.json({ message: error });
    }
}