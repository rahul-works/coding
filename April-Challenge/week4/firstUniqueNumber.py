class FirstUnique(object):

    def __init__(self, nums: List[int]):
        self.deque = collections.deque()
        self.lookup = {}
        
        for num in nums:
            self.add(num)

    def showFirstUnique(self) -> int:
        if len(self.deque) == 0:
            return -1

        while len(self.deque) > 0 and self.deque[0] in self.lookup and self.lookup[self.deque[0]] >= 2:
            self.deque.popleft()

        if len(self.deque) == 0:
            return -1
        return self.deque[0] 
        

    def add(self, value) -> None:
        if value in self.lookup:
            self.lookup[value] += 1
        else:
            self.lookup[value] = 1
        
        self.deque.append(value)
        