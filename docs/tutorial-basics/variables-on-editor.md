---
sidebar_position: 3
---

# Variáveis no Unity Editor

Nesta seção o tema abordado será **Variáveis no Unity Editor**.

As variáveis são pequenos containers que podem armazenar diferentes tipos de dados. Estes valores podem ser atribuidos tanto por meio de código quanto no Unity Editor.

```csharp title="Exemplo de variável em C#"
public string name = "João Silva";
```

## Variáveis Públicas

As **variáveis públicas** podem ser definidas em qualquer script quando atribuido a palavra chave `public` no ínicio da variável. Quando a variável é pública ela fica visível e é possivel atribuir valor a ela através do editor.

Para facilitar a compreensão vamos imaginar que estamos criando a lógica de movimentação do player.

```csharp title="Lógica de movimentação"
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public float movementSpeed = 5f; // Velocidade de movimento

    // Update é chamado uma vez por frame
    void Update()
    {
        // Obtém o input do eixo vertical (setas para cima e para baixo ou W e S)
        float verticalInput = Input.GetAxis("Vertical");

        // Calcula o movimento com base no input e na velocidade
        Vector3 movement = transform.forward * verticalInput * movementSpeed * Time.deltaTime;

        // Move o objeto na direção calculada
        transform.position += movement;
    }
}
```

A variável `public float movementSpeed` será acessível pelo **Unity Editor** pois recebe um valor público, podendo o valor ser atribuído diretamente pelo editor, facilitando a alteração da velocidade de movimentação diretamente no editor.

![](/img/var-unity.png)

## Tipos de Variáveis
