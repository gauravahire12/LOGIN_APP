class LoginResponse{

    setStatus(status){
        this.status = status;
    }
    getStatus(){
        return this.status;
    }

    setDescription(desc){
        this.description = desc;
    }
    getDescription(){
        return this.description;
    }
}

module.exports = LoginResponse