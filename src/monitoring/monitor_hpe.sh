for i in {1..1000} ; do
    sleep 1
    out=`kubectl get hpa`
    echo "$out"
    tput cuu 2
done
