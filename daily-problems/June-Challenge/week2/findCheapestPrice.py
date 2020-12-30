class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, K: int) -> int:
        if src == dst:
            return 0
        location = collections.defaultdict(list)
        prices = collections.defaultdict(lambda: float('inf'))
        
        for u, v, p in flights:
            location[u] += [(v, p)]
            
        q = [(src, -1, 0)]
        
        while q:
            position, k, cost = q.pop(0)
            if position == dst or k == K:
                continue
            for neighbor, p in location[position]:
                if cost + p >= prices[neighbor]:
                    continue
                else:
                    prices[neighbor] = cost+p
                    q += [(neighbor, k+1, cost+p)]
                    
        if prices[dst] < float('inf'):
            return prices[dst]
        else:
            return -1