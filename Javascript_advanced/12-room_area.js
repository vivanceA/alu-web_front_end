let roomDimensions = {
    width: 50,
    length: 100,
    getArea: function () {
        return this.width * this.length;
    }
}

const boundGerArea = roomDimensions.getArea.bind(roomDimensions);