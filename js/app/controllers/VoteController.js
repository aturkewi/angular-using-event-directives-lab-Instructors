function VoteController() {
    this.votes = 0;
    this.vote_count = 0
    this.incrementVotes = function () {
      if (this.vote_count < 1){
        this.votes ++
        this.vote_count ++
      }
    };

    this.decrementVotes = function () {
      if (this.vote_count > -1) {
        this.votes --
        this.vote_count --
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
