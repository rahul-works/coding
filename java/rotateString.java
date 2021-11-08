import java.lang.*;
import java.util.*;
public class rotateString {
    public static void main(String[] args) {
        // YOUR CODE GOES HERE
        // Please take input and print output to standard input/output (stdin/stdout)
        // DO NOT USE ARGUMENTS FOR INPUTS
        // E.g. 'Scanner' for input & 'System.out' for output
        Scanner myObj = new Scanner(System.in); // Create a Scanner object
        int N = myObj.nextInt();
        int[] num = new int[N];
        for(int i=0; i<N; i++){
            num[i] = myObj.nextInt();
        }
        int ro = myObj.nextInt();
        ro = ro%N;
        if(ro == 0){
            for (int i = 0; i < N; i++) {
                System.out.print(num[i] + " ");
            }
            System.out.println();
            return;
        }
        int l = 0;
        int r = N-1;
        while (l < r){
            int temp = num[l];
            num[l] = num[r];
            num[r] = temp;
            ++l;
            --r;
        }
        l = 0;
        r = ro-1;
        while (l < r){
            int temp = num[l];
            num[l] = num[r];
            num[r] = temp;
            ++l;
            --r;
        }
        l = ro;
        r = N-1;
        while (l < r){
            int temp = num[l];
            num[l] = num[r];
            num[r] = temp;
            ++l;
            --r;
        }
        for (int i = 0; i < num.length; i++) {
            System.out.print(num[i] + " ");
        }
        System.out.println();
        
        return;
    }
}