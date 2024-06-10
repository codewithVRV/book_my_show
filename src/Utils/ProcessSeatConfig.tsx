function processSeatConfig(config : string){
    if(config) {
        return JSON.parse(config.replace("'", '"'))
    }
    return undefined;
}

export default processSeatConfig;


