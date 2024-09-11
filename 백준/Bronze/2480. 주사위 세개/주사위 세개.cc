#include <iostream>

using namespace std;

int main() {
    int a,b,c,result,max;
    cin >> a >> b >> c;
    
    if(a==b) {
        if(b==c) {
            result = 10000+a*1000;
        }
        else {
            result = 1000+a*100;
        }
    } 
    else if (a==c) {
        result = 1000+a*100;
    }
    else if (b==c) {
        result = 1000+b*100;
    }
    else {
        max = a;
        if (a<b) {
            max = b;
            if (b<c) {
                max = c;
            }
        }
        else if (a<c) {
            max = c;
            if (b>c) {
                max = b;
            }
        }
        result = max*100;
    }
    cout << result;
}