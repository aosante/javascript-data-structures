/* Hash Table */
// Pairs keys to values. It's a technique used to convert a range of key values, into
// a range of indexes of an array (look at the HashTable.add function)

const hash = (string, max) => {
  // max is the number of buckets ijn the hash table being used to store info
  const hash = 0;
  for (let i = 0; i < string.length; i++) {
    // add the character codes to the hash variable
    hash += string.charCodeAt(i);
  }
  // the freturned value will always be in between 0 and max (max number of buckets)
  return hash % max;
};

let HashTable = function () {
  let storage = [];
  const storageLimit = 14;

  this.print = function () {
    console.log(storage);
  };

  this.add = function (key, value) {
    const index = hash(key, storageLimit);
    // if there is no key-value pari inserted in that bucket
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      const inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        // if the key exists, we set the new value here
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      // if key does not exist, we push in the new item to this bucket
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function (key) {
    const index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function (key) {
    const index = hash(key, storageLimit);
    // element does not exist
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        // if the key is equal to the passed in key, then return the corresponding value
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

// console.log(hash('quincy', 10));

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin');
// console.log(ht.lookup('tux'));
ht.print();
