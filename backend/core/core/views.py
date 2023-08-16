from django.http import JsonResponse


def TestView(request):
    id = request.GET.get("id")
    if id == "null" or id == "":
        return JsonResponse({"message": "No data specified"})
    id = request.GET.get("id")
    if int(id) == 1:
        return JsonResponse({"message": "ONE"})
    id = request.GET.get("id")
    if int(id) == 2:
        return JsonResponse({"message": "TWO"})

    return JsonResponse({"message": "Unavailable"})
