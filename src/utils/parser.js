/**
 * Builds GeoJson Feature
 * @param extraSegment - segment with constant extra value
 * @param coordinates - coordinates array
 * @returns {{geometry: {coordinates: *, type: string}, type: string, properties: {attributeType: *}}}
 */
const buildFeature = (extraSegment, coordinates) => {
    const [startIdx, endIdx, attributeType] = extraSegment
    return {
        type: "Feature",
        geometry: {
            type: "LineString",
            coordinates: coordinates.slice(startIdx, endIdx + 1)
        },
        properties: {
            attributeType: attributeType
        }
    }
}

/**
 * Builds GeoJson feature collection
 * @param features - all features for
 * @param extraKey
 * @returns {{features: *, type: string, properties: {summary: *}}}
 */
const buildFeatureCollection = (features, extraKey) => {
    return {
        type: 'FeatureCollection',
        features: features,
        properties: {
            summary: extraKey
        }
    }
}

/**
 * Build leaflet.heightgraph data
 * @param extras - ors
 * @param coordinates - coordinates array
 * @returns {Array} height graph conformal data. See https://github.com/GIScience/Leaflet.Heightgraph#supported-data
 */
const buildCollections = (extras, coordinates) => {
    let collections = []
    Object.entries(extras)
    .forEach(([extraKey, extraData]) => {
        let features = []
        for (let extraSegment of extraData.values) {
            const feature = buildFeature(extraSegment, coordinates)
            features.push(feature)
        }
        const featureCollection = buildFeatureCollection(features, extraKey)
        collections.push(featureCollection)
    })
    return collections
}

/**
 * Adds the default attributeType property 'elevation' to Features if it doesn't exist.
 * @param feature
 */
const addAttributeTypeProperty = (feature) => {
    feature.properties = feature.properties || {}
    feature.properties.attributeType = feature.properties.attributeType || 'elevation'
}

/**
 *
 * @param orsResponse
 * @returns {Array} collections - height graph conformal data. See https://github.com/GIScience/Leaflet.Heightgraph#supported-data
 */
export function ors(orsResponse) {
    let collections = null
    let responseObject = typeof orsResponse === 'string' ? JSON.parse(orsResponse) : orsResponse
    // extract coordinates and extras from ors response
    let {features: [{geometry: {coordinates: coordinates}, properties: {extras: extras}}]} = responseObject
    if (extras) {
        collections = buildCollections(extras, coordinates)
    }
    return collections
}
export function normal(data) {
    return data
}

/**
 * The geoJson parser should accept simple LineString geometries, Features and FeatureCollections.
 * It builds the Array of FeatureCollections containing the required 'summary' and 'attributeType' tags.
 * @param data - the geoJson object
 * @returns {Array}
 */
export function geoJson(data) {
    // parse to object if necessary
    data = typeof data === 'string' ? JSON.parse(data) : data
    // transforms LineString data to Feature type
    if (data.type === "LineString") {
        data = buildFeature(
            [
                0,
                data.coordinates.length - 1,
                'elevation'
            ],
            data.coordinates
        )
    }
    // transforms Feature data to FeatureCollection Type
    if (data.type === "Feature") {
        addAttributeTypeProperty(data)
        data = buildFeatureCollection([data], 'elevation')
    }
    // transforms FeatureCollection to array of FeatureCollections
    if (data.type === "FeatureCollection")
        for (let feature of data.features) {
            addAttributeTypeProperty(feature)
        }
        data.properties = data.properties || {}
        data.properties.summary = data.properties.summary || 'elevation'
    return [data]
}

// Template for a custom parser
/*export function templateParser(yourInputData)
     DO PARSING HERE
     let heighGraphConformalData = parsing(yourInputData)
     return heighGraphConformalData
}*/
