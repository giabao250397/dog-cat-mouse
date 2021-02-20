function Cat() {
    this.stomach = [];
};
Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
};
//lep ABc
module.exports = Cat;