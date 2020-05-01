# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidSequence(self, root: TreeNode, arr: List[int]) -> bool:
        if(root == None): return len(arr) == 0; 
        return self.checkpath(root, arr, 0);

    def checkpath(self, root: TreeNode, arr: List[int], i: int) -> bool:
        if(root.val != arr[i]): return False;
        if (i == len(arr)-1):
            return root.left == None and root.right == None;
        return ((root.left != None and self.checkpath(root.left, arr, i+1)) or                                         
                (root.right != None and self.checkpath(root.right, arr, i+1)) ); 