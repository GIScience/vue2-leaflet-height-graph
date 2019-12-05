export function ors(orsResponse) {
    let collections = []
    let responseObject = typeof orsResponse === 'string' ? JSON.parse(orsResponse) : orsResponse
    // extract coordinates and extras from ors response
    let {features: [{geometry: {coordinates: coordinates}, properties: {extras: extras}}]} = responseObject
    if (extras) {
        Object.entries(extras)
        .forEach(([extraKey, extraData]) => {
            let features = []
            for (let extraSegment of extraData.values) {
                let [startIdx, endIdx, attributeType] = extraSegment
                features.push({
                    type: 'Feature',
                    geometry: {
                        type: 'LineString',
                        coordinates: coordinates.slice(startIdx, endIdx+1)
                    },
                    properties: {
                        attributeType: attributeType
                    }
                })
            }
            collections.push({
                type: 'FeatureCollection',
                features: features,
                properties: {
                    summary: extraKey
                }
            })
        })
    }
    return collections
}
export function normal(data) {
    return data
}
// Template for a custom parser
/*export function templateParser(yourInputData)
     DO PARSING HERE
     let heighGraphConformalData = parsing(yourInputData)
     return heighGraphConformalData
}*/
